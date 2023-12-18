import React from "react";
import { auth } from "@clerk/nextjs";
import Dropzone from "../Components/Dropzone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "../Components/table/TableWrapper";
async function Dashboard() {
  const { userId } = auth();
  if(!userId){
    return(<p>No ID found.</p>);
  }

  const docResults = await getDocs(collection(db, "users", userId, "files"));
  const skeletonFiles: FileType[] =
    docResults.docs.map(
      (doc) => ({
        id: doc.id,
        timestamp:
          new Date((doc.data().timestamp?.seconds * 1000)) || undefined,
        filename: doc.data().filename || doc.id,
        fullName: doc.data().fullName,
        downloadURL: doc.data().downloadURL,
        type: doc.data().type,
        size: doc.data().size,
      })
    );
  return (
    <div className="border-t">
      <Dropzone />
      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>

        <div>
        <TableWrapper
          skeletonFiles={skeletonFiles}
        />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
