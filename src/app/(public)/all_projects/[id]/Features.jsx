"use client";
import Comments from "@/app/Comments";
import { useState } from "react";
import FeaturesItem from "./FeaturesItem";
import Maps from "./Maps";
import Possibilities from "./Possibilities";
import Tabs from "./Tabs";

function Features({ features }) {
  const [tab, setTab] = useState(1);

  const renderItem = (tab) => {
    switch (tab) {
      case 1:
        return <Possibilities videos={features.media} />;
      case 2:
        return <FeaturesItem props={features.props} />;
      case 3:
        return <Maps link={features.google_map_url} />;
    }
  };

  return (
    <div className="space-y-4">
      <Tabs tab={tab} setTab={setTab} />
      {renderItem(tab)}
    </div>
  );
}

export default Features;
