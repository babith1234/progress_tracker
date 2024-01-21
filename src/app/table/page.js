"use client";
import { Subjects } from "@/helpers/subjectsName";

export default function Table() {
   const sub1 =  Subjects.cse.semester1.subject1
  return (
    <>
 <div className="h-screen bg-white flex items-center justify-center">

<table className="border border-black w-screen">
  <thead>
    <tr className="text-black border-b-2 border-black">
     <th className="border-r border-black">SUBJECT </th>
      <th className="border-r border-black">IA1</th>
      <th className="border-r border-black">IA2</th>
      <th className="border-r border-black">IA3</th>
      <th className="border-r border-black">AVG</th>
      <th className="border-r border-black" >FINAL</th>
    </tr>
  </thead>

  <tbody>
    <tr className="text-black border-b-2 border-r-4 border-black">
      <td className="border-r border-black">{sub1}</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
    </tr>

    <tr className="text-black border-b-2 border-black">
      <td className="border-r border-black">{Subjects.cse.semester1.subject2}</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
    </tr>

    <tr className="text-black border-b-2 border-black">
      <td className="border-r border-black">{Subjects.cse.semester1.subject3}</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
    </tr>
    <tr className="text-black border-b-2 border-black">
      <td className="border-r border-black">{Subjects.cse.semester1.subject4}</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
    </tr>
    <tr className="text-black border-b-2 border-black">
      <td className="border-r border-black">{Subjects.cse.semester1.subject5}</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
    </tr>
    <tr className="text-black border-b-2 border-black">
      <td className="border-r border-black">{Subjects.cse.semester1.subject6}</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
      <td className="border-r border-black">1</td>
    </tr>
  </tbody>
</table>
</div>

    </>
  );
}
