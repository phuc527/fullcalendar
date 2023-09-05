// Library
import React, { Suspense } from "react";

// Pages
const LazyCalendar = React.lazy(() => import("./pages/calendar"));

// Utils
import Loading from "./utils/loading";

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h1 style={{
          textAlign: 'center'
        }}>Calendar page</h1>
        <LazyCalendar />
      </Suspense>
    </div>
  );
};

export default App;
