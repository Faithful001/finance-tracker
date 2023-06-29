const Home = () => {
  return (
    <div className="home">
      <div className="section">
        <div className="w-full h-[865px] p-8 bg-white rounded-lg shadow flex-col justify-start items-center gap-8 inline-flex border">
          <div className="self-stretch justify-between items-baseline gap-2.5 inline-flex">
            <div className="text-zinc-900 text-[24px] font-bold">
              Finance Tracker
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="flex-col justify-start items-center flex">
              <div className="p-4 rounded-lg border flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-between items-center gap-2.5 inline-flex">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-zinc-500 text-[14px] font-bold tracking-wider">
                      TOTAL BALANCE
                    </div>
                    <div className="text-zinc-900 text-[32px] font-bold">
                      $1400.00
                    </div>
                  </div>
                  <div className="p-1 bg-neutral-50 rounded-[200px] flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-[20px] h-3.5 left-[2px] top-[5px] absolute"></div>
                    </div>
                  </div>
                </div>
                <div className="w-[340px] px-8 py-6 rounded border border-zinc-300 justify-between items-center gap-8 inline-flex">
                  <div className="flex-col justify-start items-center gap-0.5 inline-flex">
                    <div className="text-zinc-500 text-[14px] font-normal uppercase tracking-wider">
                      INCOME
                    </div>
                    <div className="text-green-700 text-[24px] font-bold">
                      $2200.00
                    </div>
                  </div>
                  <div className="w-12 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
                  <div className="flex-col justify-start items-center gap-0.5 inline-flex">
                    <div className="text-zinc-500 text-[14px] font-normal uppercase tracking-wider">
                      EXPENSE
                    </div>
                    <div className="text-red-600 text-[24px] font-bold">
                      $800.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg border flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch px-1 pt-1 pb-2 border border-zinc-400 justify-between items-center gap-2.5 inline-flex">
                  <div className="text-zinc-900 text-[14px] font-bold">
                    HISTORY
                  </div>
                  <div className="text-zinc-400 text-[10px] font-normal">
                    Clear All
                  </div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[341px] px-2.5 py-1.5 bg-neutral-50 rounded-sm justify-start items-start gap-2.5 inline-flex">
                    <div className="text-zinc-900 text-[14px] font-normal">
                      Today
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <div className="w-[340px] px-2 pt-5 pb-3 border border-gray-200 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-[17px] justify-between items-start gap-[188px] flex">
                        <div className="text-zinc-900 text-[14px] font-bold">
                          Investments
                        </div>
                        <div className="justify-start items-start flex">
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            +
                          </div>
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            $
                          </div>
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            600
                          </div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-700 rounded-full" />
                    </div>
                    <div className="w-[340px] px-2 pt-5 pb-3 border border-zinc-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-[17px] justify-between items-start gap-[188px] flex">
                        <div className="text-zinc-900 text-[14px] font-bold">
                          Rent
                        </div>
                        <div className="justify-start items-start flex">
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            -
                          </div>
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            $
                          </div>
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            800
                          </div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                    </div>
                    <div className="w-[340px] px-2 pt-5 pb-3 border border-gray-200 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-[17px] justify-between items-start gap-[188px] flex">
                        <div className="text-zinc-900 text-[14px] font-bold">
                          Salary
                        </div>
                        <div className="justify-start items-start flex">
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            +
                          </div>
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            $
                          </div>
                          <div className="text-right text-zinc-900 text-[14px] font-bold">
                            1600
                          </div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-700 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg border flex-col justify-start items-start gap-2 flex">
                <div className="w-[340px] px-1 pt-1 pb-2 border border-zinc-400 justify-start items-start gap-2.5 inline-flex">
                  <div className="text-zinc-900 text-[14px] font-bold">
                    NEW TRANSACTION
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-8 flex">
                  <div className="h-[110px] flex-col justify-start items-end gap-3 flex">
                    {/* <div className="self-stretch px-2.5 py-4 rounded border border-zinc-500 justify-start items-start gap-2.5 inline-flex"> */}
                      <input className="grow shrink basis-0 text-zinc-500 text-[14px] font-normal h-28 border-block"/>

                    <div className="self-stretch justify-between items-center gap-[15px] inline-flex">
                      <div className="h-[49px] px-2.5 py-4 rounded border border-zinc-400 justify-start items-start gap-2.5 flex">
                        <div className="grow shrink basis-0 text-zinc-400 text-[14px] font-normal">
                          Amount $
                        </div>
                      </div>
                      <div className="p-1 bg-gray-200 rounded justify-start items-center flex">
                        <div className="px-2 py-1.5 bg-neutral-50 rounded justify-start items-center gap-2.5 flex">
                          <div className="text-zinc-600 text-[14px] font-bold">
                            Income
                          </div>
                        </div>
                        <div className="px-2 py-1.5 rounded justify-start items-center gap-2.5 flex">
                          <div className="text-zinc-500 text-[14px] font-normal">
                            Expense
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[340px] px-2.5 py-4 bg-zinc-900 rounded shadow justify-center items-start gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-[14px] font-bold">
                      Add Transaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black text-[14px] font-normal underline">
              Log in to continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
