import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer className=" bg-slate-200 dark:bg-slate-800 dark:text-slate-300 p-8 lg:p-12 ">
      <div className="copyright text-sm text-center dark:text-slate-400 ">
        <p> © {dayjs().year()} Duc Thinh Tran.</p>
        <p> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
