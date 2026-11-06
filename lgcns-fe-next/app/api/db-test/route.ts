import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // 1. MongoDB에 아주 가벼운 쿼리(연결 상태 확인용)를 보냅니다.
    // 프로젝트 schema.prisma에 정의된 모델 중 하나를 사용하세요. (예: user)
    await prisma.user.findFirst();

    // 2. 에러 없이 한 줄이라도 실행되면 연결 성공입니다.
    return NextResponse.json({ 
      success: true, 
      message: "MongoDB 연결 성공! Prisma가 데이터베이스와 정상적으로 통신하고 있습니다." 
    });
  } catch (error: any) {
    // 3. 연결에 실패하면 에러 메시지를 화면에 뿌려줍니다.
    return NextResponse.json({ 
      success: false, 
      message: "MongoDB 연결 실패! 에러 내용을 확인하세요.",
      error: error.message || error 
    }, { status: 500 });
  }
}