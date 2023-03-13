import Script from "next/script";

import { useState, useEffect } from "react";

var status = {
  404: "Not Found",
};

function Error({ statusCode }) {
  const [hasMounted, setHasMounted] = useState(true);
  useEffect(() => {
    var navbar = document.getElementsByClassName("navbar");
    if (navbar.length === 1) {
      navbar[0].remove();
    }
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <div>
      <p>
        {statusCode
          ? `{code: ${statusCode}, message: "${status[statusCode]}"}`
          : "An error occurred on client"}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
