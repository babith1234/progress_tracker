"use client";
import { useState, useEffect } from "react";
import { Subjects } from "@/helpers/subjectsName";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function Table({}) {
  const [sem, setSem] = useState("");
  const [dept, setDept] = useState("");
  const searchParams = useSearchParams();

  const [reloadOnce, setReloadOnce] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  useEffect(() => {
    if (!reloadOnce) {
      setReloadOnce(true);
      setSem(searchParams.get("sem"));
      setDept(searchParams.get("dept"));
    }
  }, [reloadOnce]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.post("/api/getMarks", { sem });
      if (response.data.data === null) {
        setSubject1("");
        setSubject2("");
        setSubject3("");
        setSubject4("");
        setSubject5("");
        setSubject6("");
      }
      else{
      // console.log(response.data)
      console.log(response.data.data?.subject1);
      setSubject1(response.data.data?.subject1);
      setSubject2(response.data.data?.subject2);
      setSubject3(response.data.data?.subject3);
      setSubject4(response.data.data?.subject4);
      setSubject5(response.data.data?.subject5);
      setSubject6(response.data.data?.subject6);
      // console.log(response.data.data);
    }
  }
    fetchdata();
  }, [sem]);

  const subjectsForSemester = Subjects[dept]?.[sem];

  const [subject1, setSubject1] = useState([]);
  const [subject2, setSubject2] = useState([]);
  const [subject3, setSubject3] = useState([]);
  const [subject4, setSubject4] = useState([]);
  const [subject5, setSubject5] = useState([]);
  const [subject6, setSubject6] = useState([]);

  console.log(subject1);

  const handleEdit = (rowIndex) => {
    setEditingRow(rowIndex);
  };

  const handleUpdate = () => {
    // Handle the update logic here
    setEditingRow(null); // Reset editing state after updating
  };

  const marks = {
    subject1: subject1,
    subject2: subject2,
    subject3: subject3,
    subject4: subject4,
    subject5: subject5,
    subject6: subject6,
  };

  console.log(marks);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/postMarks", {
        sem,
        marks: { ...marks },
      });
      if (response.data.success === true) {
        alert("data created successfully");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="h-screen bg-white flex items-center justify-center">
      <div className="overflow-x-auto">
        <table className="border border-black w-screen">
          <thead>
            <tr className="text-black border-b-2 border-black">
              <th className="border-r border-black">SUBJECT </th>
              <th className="border-r border-black">IA1</th>
              <th className="border-r border-black">IA2</th>
              <th className="border-r border-black">IA3</th>
              <th className="border-r border-black">AVG</th>
              <th className="border-r border-black">FINAL</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-black border-b-2 border-r-4 border-black">
              <td className="border-r border-black">
                {subjectsForSemester?.subject1}
              </td>
              <td className="border-r border-black">
                {editingRow === 0 ? (
                  <input
                    type="text"
                    value={subject1[0]}
                    onChange={(e) =>
                      setSubject1([e.target.value, ...subject1.slice(1)])
                    }
                  />
                ) : (
                  `${subject1[0]}`
                )}
              </td>

              <td className="border-r border-black">
                {editingRow === 0 ? (
                  <input
                    type="text"
                    value={subject1[1]}
                    onChange={(e) =>
                      setSubject1([
                        subject1[0],
                        e.target.value,
                        ...subject1.slice(2),
                      ])
                    }
                  />
                ) : (
                  `${subject1[1]}`
                )}
              </td>

              <td className="border-r border-black">
                {editingRow === 0 ? (
                  <input
                    type="text"
                    value={subject1[2]}
                    onChange={(e) =>
                      setSubject1([
                        subject1[0],
                        subject1[1],
                        e.target.value,
                        ...subject1.slice(3),
                      ])
                    }
                  />
                ) : (
                  `${subject1[2]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 0 ? (
                  <input
                    type="text"
                    value={subject1[3]}
                    onChange={(e) =>
                      setSubject1([
                        subject1[0],
                        subject1[1],
                        subject1[2],
                        e.target.value,
                        ...subject1.slice(4),
                      ])
                    }
                  />
                ) : (
                  `${subject1[3]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 0 ? (
                  <input
                    type="text"
                    value={subject1[4]}
                    onChange={(e) =>
                      setSubject1([
                        subject1[0],
                        subject1[1],
                        subject1[2],
                        subject1[3],
                        e.target.value,
                        ...subject1.slice(5),
                      ])
                    }
                  />
                ) : (
                  `${subject1[4]}`
                )}
              </td>
              <td>
                {editingRow === 0 ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-blue-500 px-5 md:px-5"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEdit(0)}
                    className="bg-green-500 px-5 md:px-5"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>

            <tr className="text-black border-b-2 border-black">
              <td className="border-r border-black">
                {subjectsForSemester?.subject2}
              </td>
              <td className="border-r border-black">
                {editingRow === 1 ? (
                  <input
                    type="text"
                    value={subject2[0]}
                    onChange={(e) =>
                      setSubject2([e.target.value, ...subject2.slice(1)])
                    }
                  />
                ) : (
                  `${subject2[0]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 1 ? (
                  <input
                    type="text"
                    value={subject2[1]}
                    onChange={(e) =>
                      setSubject2([
                        subject2[0],
                        e.target.value,
                        ...subject2.slice(2),
                      ])
                    }
                  />
                ) : (
                  `${subject2[1]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 1 ? (
                  <input
                    type="text"
                    value={subject2[2]}
                    onChange={(e) =>
                      setSubject2([
                        subject2[0],
                        subject2[1],
                        e.target.value,
                        ...subject2.slice(3),
                      ])
                    }
                  />
                ) : (
                  `${subject2[2]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 1 ? (
                  <input
                    type="text"
                    value={subject2[3]}
                    onChange={(e) =>
                      setSubject2([
                        subject2[0],
                        subject2[1],
                        subject2[2],
                        e.target.value,
                        ...subject2.slice(4),
                      ])
                    }
                  />
                ) : (
                  `${subject2[3]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 1 ? (
                  <input
                    type="text"
                    value={subject2[4]}
                    onChange={(e) =>
                      setSubject2([
                        subject2[0],
                        subject2[1],
                        subject2[2],
                        subject2[3],
                        e.target.value,
                        ...subject2.slice(5),
                      ])
                    }
                  />
                ) : (
                  `${subject2[4]}`
                )}
              </td>
              <td>
                {editingRow === 1 ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-blue-500 px-5 md:px-5"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEdit(1)}
                    className="bg-green-500 px-5 md:px-5"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>

            <tr className="text-black border-b-2 border-black">
              <td className="border-r border-black">
                {subjectsForSemester?.subject3}
              </td>
              <td className="border-r border-black">
                {editingRow === 2 ? (
                  <input
                    type="text"
                    value={subject3[0]}
                    onChange={(e) =>
                      setSubject3([e.target.value, ...subject3.slice(1)])
                    }
                  />
                ) : (
                  `${subject3[0]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 2 ? (
                  <input
                    type="text"
                    value={subject3[1]}
                    onChange={(e) =>
                      setSubject3([
                        subject3[0],
                        e.target.value,
                        ...subject3.slice(2),
                      ])
                    }
                  />
                ) : (
                  `${subject3[1]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 2 ? (
                  <input
                    type="text"
                    value={subject3[2]}
                    onChange={(e) =>
                      setSubject3([
                        subject3[0],
                        subject3[1],
                        e.target.value,
                        ...subject3.slice(3),
                      ])
                    }
                  />
                ) : (
                  `${subject3[2]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 2 ? (
                  <input
                    type="text"
                    value={subject3[3]}
                    onChange={(e) =>
                      setSubject3([
                        subject3[0],
                        subject3[1],
                        subject3[2],

                        e.target.value,
                        ...subject3.slice(4),
                      ])
                    }
                  />
                ) : (
                  `${subject3[3]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 2 ? (
                  <input
                    type="text"
                    value={subject3[4]}
                    onChange={(e) =>
                      setSubject3([
                        subject3[0],
                        subject3[1],
                        subject3[2],
                        subject3[3],
                        e.target.value,
                        ...subject3.slice(5),
                      ])
                    }
                  />
                ) : (
                  `${subject3[4]}`
                )}
              </td>
              <td>
                {editingRow === 2 ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-blue-500 px-5 md:px-5"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEdit(2)}
                    className="bg-green-500 px-5 md:px-5"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
            <tr className="text-black border-b-2 border-black">
              <td className="border-r border-black">
                {subjectsForSemester?.subject4}
              </td>
              <td className="border-r border-black">
                {editingRow === 3 ? (
                  <input
                    type="text"
                    value={subject4[0]}
                    onChange={(e) =>
                      setSubject4([e.target.value, ...subject4.slice(1)])
                    }
                  />
                ) : (
                  `${subject4[0]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 3 ? (
                  <input
                    type="text"
                    value={subject4[1]}
                    onChange={(e) =>
                      setSubject4([
                        subject4[0],
                        e.target.value,
                        ...subject4.slice(2),
                      ])
                    }
                  />
                ) : (
                  `${subject4[1]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 3 ? (
                  <input
                    type="text"
                    value={subject4[2]}
                    onChange={(e) =>
                      setSubject4([
                        subject4[0],
                        subject4[1],
                        e.target.value,
                        ...subject4.slice(3),
                      ])
                    }
                  />
                ) : (
                  `${subject4[2]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 3 ? (
                  <input
                    type="text"
                    value={subject4[3]}
                    onChange={(e) =>
                      setSubject4([
                        subject4[0],
                        subject4[1],
                        subject4[2],

                        e.target.value,
                        ...subject4.slice(4),
                      ])
                    }
                  />
                ) : (
                  `${subject4[3]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 3 ? (
                  <input
                    type="text"
                    value={subject4[4]}
                    onChange={(e) =>
                      setSubject4([
                        subject4[0],
                        subject4[1],
                        subject4[2],
                        subject4[3],
                        e.target.value,
                        ...subject4.slice(5),
                      ])
                    }
                  />
                ) : (
                  `${subject4[4]}`
                )}
              </td>
              <td>
                {editingRow === 3 ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-blue-500 px-5 md:px-5"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEdit(3)}
                    className="bg-green-500 px-5 md:px-5"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
            <tr className="text-black border-b-2 border-black">
              <td className="border-r border-black">
                {subjectsForSemester?.subject5}
              </td>
              <td className="border-r border-black">
                {editingRow === 4 ? (
                  <input
                    type="text"
                    value={subject5[0]}
                    onChange={(e) =>
                      setSubject5([e.target.value, ...subject5.slice(1)])
                    }
                  />
                ) : (
                  `${subject5[0]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 4 ? (
                  <input
                    type="text"
                    value={subject5[1]}
                    onChange={(e) =>
                      setSubject5([
                        subject5[0],
                        e.target.value,
                        ...subject5.slice(2),
                      ])
                    }
                  />
                ) : (
                  `${subject5[1]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 4 ? (
                  <input
                    type="text"
                    value={subject5[2]}
                    onChange={(e) =>
                      setSubject5([
                        subject5[0],
                        subject5[1],
                        e.target.value,
                        ...subject5.slice(3),
                      ])
                    }
                  />
                ) : (
                  `${subject5[2]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 4 ? (
                  <input
                    type="text"
                    value={subject5[3]}
                    onChange={(e) =>
                      setSubject5([
                        subject5[0],
                        subject5[1],
                        subject5[2],

                        e.target.value,
                        ...subject5.slice(4),
                      ])
                    }
                  />
                ) : (
                  `${subject5[3]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 4 ? (
                  <input
                    type="text"
                    value={subject5[4]}
                    onChange={(e) =>
                      setSubject5([
                        subject5[0],
                        subject5[1],
                        subject5[2],
                        subject5[3],
                        e.target.value,
                        ...subject5.slice(5),
                      ])
                    }
                  />
                ) : (
                  `${subject5[4]}`
                )}
              </td>
              <td>
                {editingRow === 4 ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-blue-500 px-5 md:px-5"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEdit(4)}
                    className="bg-green-500 px-5 md:px-5"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
            <tr className="text-black border-b-2 border-black">
              <td className="border-r border-black">
                {subjectsForSemester?.subject6}
              </td>
              <td className="border-r border-black">
                {editingRow === 5 ? (
                  <input
                    type="text"
                    value={subject6[0]}
                    onChange={(e) =>
                      setSubject6([e.target.value, ...subject6.slice(1)])
                    }
                  />
                ) : (
                  `${subject6[0]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 5 ? (
                  <input
                    type="text"
                    value={subject6[1]}
                    onChange={(e) =>
                      setSubject6([
                        subject6[0],
                        e.target.value,
                        ...subject6.slice(2),
                      ])
                    }
                  />
                ) : (
                  `${subject6[1]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 5 ? (
                  <input
                    type="text"
                    value={subject6[2]}
                    onChange={(e) =>
                      setSubject6([
                        subject6[0],
                        subject6[1],
                        e.target.value,
                        ...subject6.slice(3),
                      ])
                    }
                  />
                ) : (
                  `${subject6[2]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 5 ? (
                  <input
                    type="text"
                    value={subject6[3]}
                    onChange={(e) =>
                      setSubject6([
                        subject6[0],
                        subject6[1],
                        subject6[2],

                        e.target.value,
                        ...subject6.slice(4),
                      ])
                    }
                  />
                ) : (
                  `${subject6[3]}`
                )}
              </td>
              <td className="border-r border-black">
                {editingRow === 5 ? (
                  <input
                    type="text"
                    value={subject6[4]}
                    onChange={(e) =>
                      setSubject6([
                        subject6[0],
                        subject6[1],
                        subject6[2],
                        subject6[3],
                        e.target.value,
                        ...subject6.slice(5),
                      ])
                    }
                  />
                ) : (
                  `${subject6[4]}`
                )}
              </td>
              <td>
                {editingRow === 5 ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-blue-500 px-5 md:px-5"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEdit(5)}
                    className="bg-green-500 px-5 md:px-5"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        </div>
       
        <button className="p-5 bg-green-500" onClick={handleSubmit}>
          SUBMIT
        </button>
        </div>
      
     
    </>
  );
}
