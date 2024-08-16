import React from "react";
import AnimatedCountUp from "./AnimatedCountUp";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      
        <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} /> 
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="header-2">
            {totalBanks > 0 ? "Bank Accounts: " + totalBanks : "No Banks Added"}
          </h2>
          <div className="flex flex-col gap-2">
            <div className="total-balance-amount flex-center gap-2">
              <AnimatedCountUp amount={totalCurrentBalance} />
            </div>
            <p className="total-balance-label">Total Balance</p>
          </div>
        </div>
      
    </section>
  );
};

export default TotalBalanceBox;
