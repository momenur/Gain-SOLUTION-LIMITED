import SearchFiled from "../form_component/SearchFiled";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 mx-24 bg-white">
      <div className="flex items-center justify-center gap-1">
        <h1 className="text-3xl font-semibold">plut</h1>
        <img className="w-[30px]" src="/public/Logo.png" alt="" />
      </div>

      <div className="flex items-center gap-2">
        <ul className="flex gap-8 pe-10">
          <li>Home</li>
          <li className="font-semibold text-blue-700">Employee</li>
          <li>Hiring</li>
          <li>Report</li>
          <li>Files</li>
          <li>Payroll</li>
        </ul>
        <SearchFiled searchWidth="3000px" />
        <div className="flex gap-2">
          <div className="text-end">
            <p className="font-semibold text-md">Sadik Hasan</p>
            <p className="text-gray-600">Friday, 29 September</p>
          </div>
          <img className="w-12 h-12 rounded-md" src="/public/user.jpg" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
