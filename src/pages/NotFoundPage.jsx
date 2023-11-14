import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Error"
  }, [])
  return (
    <div>
      <div className=" flex items-center text-center mt-[40vh] flex-col font-['Bebas_Neue'] text-5xl text-dark dark:text-white">
        <p>404 Not Found</p>
      </div>
    </div>
  );
}

export default NotFoundPage;
