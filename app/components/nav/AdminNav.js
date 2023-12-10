// used in admin layout
import Link from "next/link";
export default function AdminNav() {
  return (
    <>
      <nav className="nav flex content-center justify-content-center mb-3">
       
       <Link className="nav-link p-3 bg-green-500 text-white ml-3 rounded-lg hover:bg-green-600" href="/dashboard/admin/addSubject">
          Add Subject
        </Link>
        <Link className="nav-link p-3 bg-green-500 text-white ml-3 rounded-lg hover:bg-green-600" href="/dashboard/admin/addSession">
          Add Session
        </Link>
        <Link className="nav-link p-3 bg-green-500 text-white ml-3 rounded-lg hover:bg-green-600" href="/dashboard/admin/addClass">
          Add Class Name
        </Link>
        <Link className="nav-link p-3 bg-green-500 text-white ml-3 rounded-lg hover:bg-green-600" href="/dashboard/admin/addExam">
          Add Exam Name
        </Link>
        <Link className="nav-link p-3 bg-green-500 text-white ml-3 rounded-lg hover:bg-green-600" href="/dashboard/admin/addstudent">
        Add Student
        </Link>
       
      </nav>
    </>
  );
}
