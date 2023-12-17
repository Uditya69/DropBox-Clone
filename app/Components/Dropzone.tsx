"use client";// Import necessary Firebase modules
import { db, storage } from "@/firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import DropzoneComponent from "react-dropzone";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dropzone() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const onDrop = async (acceptedFiles: any) => {
    for (const file of acceptedFiles) {
      await uploadFile(file);
    }
  };

  async function uploadFile(selectedFile: any) {
    if (loading || !user) return;

    try {
      setLoading(true);

      // Add file information to Firestore
      const docRef = await addDoc(collection(db, "users", user.id, "files"), {
        userId: user.id,
        filename: selectedFile.name,
        fullName: user.fullName,
        profileImg: user.imageUrl,
        timestamp: serverTimestamp(),
        type: selectedFile.type,
        size: selectedFile.size,
      });

      // Upload file to Firebase Storage
      const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);
      console.log("Before uploadBytes");
      await uploadBytes(imageRef, selectedFile);
      console.log("After uploadBytes");

      // Update Firestore document with file download URL
      const downloadURL = await getDownloadURL(imageRef);
      console.log("Before updateDoc");
      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL: downloadURL,
      });
      console.log("After updateDoc");

      //toast to success
      toast.success("File Uploaded Successfully!🎉");
    } catch (error) {
      //toast to error
      toast.error("Error Uploadingfile:${error.message}😟");
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  }

  const maxsize = 20971520; // 20MB

  return (
    <>
      <DropzoneComponent
        minSize={0}
        maxSize={maxsize}
        onDrop={onDrop}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => (
          <section className="m-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
                isDragActive
                  ? "bg-blue-800 text-white animate-pulse"
                  : " bg-slate-100/50 dark:bg-slate-800/80 text text-slate-400"
              )}
            >
              <input {...getInputProps()} />

              {!isDragActive && "Click here or drop a file to upload!"}
              {isDragActive && !isDragReject && "Drop to upload this file!"}
              {isDragReject && "This file type is not Accepted!"}
              {fileRejections.length > 0 && (
                <div className="text-danger" mt-2>
                  File is too Large!{" "}
                </div>
              )}
            </div>
          </section>
        )}
      </DropzoneComponent>
      <ToastContainer position="top-right" autoClose={5000}/>
    </>
  );
}

export default Dropzone;
