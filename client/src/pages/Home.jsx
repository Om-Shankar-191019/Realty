import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fetchListing = async () => {
      try {
        // setLoading(true);
        const res = await fetch(`/api/listing/get`);
        const data = await res.json();
        // if (data.success === false) {
        //   setError(true);
        //   setLoading(false);
        //   return;
        // }
        // setListing(data);
        // setLoading(false);
        // setError(false);
        // console.log(data);
      } catch (error) {
        // setError(true);
        // setLoading(false);
        console.log(error);
      }
    };

    fetchListing();
  }, []);
  return <div>Home</div>;
};

export default Home;
