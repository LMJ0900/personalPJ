'use client'
import { useState } from 'react';
import Account from "@/components/common/pages/account";
import History from "@/components/common/pages/history";


export default function Accout(){
    const [isTest,setIsTest] = useState(false);
    const [isTest1,setIsTest1] = useState(false);
    const handleAccount = ()=>{
        setIsTest(true);
        setIsTest1(false);
    }
    const handleHistory = ()=>{
        setIsTest1(true);
        setIsTest(false);
    }
    return(<>
     <div className="flex bg-white text-black top-0 py-3 flex-wrap justify-around bg-silver text-2xl">
        <head>
            <title>내 계좌 관리</title>
        </head>  
        <h1 className="text-purple-800 font-semibold">ggun</h1>
        <ul id="header" className="flex gap-[30px]">
          <li>고민중</li>
          <li>계좌</li>
          <li>실시간 호가차트</li>
          <li>AI</li>
          <li>경제뉴스</li>
          <li>마이페이지</li>
        </ul>
    </div>
    
    <div className='bg-chart'>
    <hr className="my-5"/>
    <div className="text-4xl font-bold my-28 ml-72 text-pink-200">ai투자안내</div>
    <div className="text-2xl mt-28 my-28 ml-72 text-pink-200">여러분의 자금을 안전하게 관리해주는 ai계좌 서비스입니다</div>
    </div>
    <div className="ml-72 ">
    <button className="border-gray-200 border-2" onClick={handleAccount} >{isTest ?  <button className="border-purple-800 border-2">계좌관리</button>:"계좌관리"}</button>
    <button className="border-gray-200 border-2" onClick={handleHistory} >{isTest1 ?  <button className="border-purple-800 border-2">거래내역</button>:"거래내역"}</button>
    </div>
    <hr className="border-purple-800 border-2"/>
    {isTest ? <Account/> : <History/>}
    </>)
}