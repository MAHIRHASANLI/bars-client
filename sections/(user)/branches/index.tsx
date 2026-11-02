"use client";

import { useState } from "react";
import { branchesSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
import BranchListComponent from "@/components/(user)/branches_section/branch_list";
import BranchMapComponent from "@/components/(user)/branches_section/branch_map";
import { StoreType } from "@/types/links";

const BranchesSection = () => {
  const [selected, setSelected] = useState<StoreType>(branchesSectionDatas[0]);
  return (
    <section className="py-6">
      <div className="grid grid-cols-[1fr_2.5fr] gap-10 max-[1000px]:grid-cols-1">
        <BranchListComponent stores={branchesSectionDatas}
          selectedId={selected.id}
          onSelect={setSelected}/>
        <BranchMapComponent selected={selected}/>
      </div>
    </section>
  );
};

export default BranchesSection;
