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
      console.log(response.data.success);
    };
    fetchdata();
  }, [sem]);

  const subjectsForSemester = Subjects[dept]?.[sem];

  const [editingRow, setEditingRow] = useState(null);

  const [subject1, setSubject1] = useState([]);
  const [subject2, setSubject2] = useState([]);
  const [subject3, setSubject3] = useState([]);
  const [subject4, setSubject4] = useState([]);
  const [subject5, setSubject5] = useState([]);
  const [subject6, setSubject6] = useState([]);

  const handleEdit = (rowIndex) => {
    setEditingRow(rowIndex);
  };

  const handleUpdate = () => {
    // Handle the update logic here
    setEditingRow(null); // Reset editing state after updating
  };

  return (
    <>
      <div className="h-screen bg-white flex items-center justify-center">
        <table className="border border-black w-screen overflow-x-auto">
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
                {" "}
                {editingRow === 0 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 0 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 0 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 0 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 0 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
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
                {" "}
                {editingRow === 1 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 1 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 1 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 1 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 1 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
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
                {" "}
                {editingRow === 2 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 2 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 2 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 2 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 2 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
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
                {" "}
                {editingRow === 3 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 3 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 3 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 3 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 3 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
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
                {" "}
                {editingRow === 4 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 4 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 4 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 4 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 4 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
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
                {" "}
                {editingRow === 5 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 5 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 5 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 5 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
                )}
              </td>
              <td className="border-r border-black">
                {" "}
                {editingRow === 5 ? (
                  <input type="text" value="" onChange={(e) => {}} />
                ) : (
                  ""
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
    </>
  );
}
