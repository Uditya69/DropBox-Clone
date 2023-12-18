"use client"
import { Button } from '@/components/ui/button';
import { FileType } from '@/typings';
import { DataTable } from './Table';
import { columns } from './column';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';

function TableWrapper({skeletonFiles}: {skeletonFiles: FileType[]}) {
  const{user} =useUser();
  const[initialFiles,setInitialFiles] = useState<FileType[]>([]);
  
  return (
    <div>
        <Button>Sort By...</Button>
        <DataTable columns={columns} data={skeletonFiles} />
    </div>
  );
}

export default TableWrapper;