import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

// URI가 없으면 모듈 로드 시점이 아니라 실제 접속 시점에만 에러를 던진다.
export function getMongoClientPromise(): Promise<MongoClient> {
  if (clientPromise) return clientPromise;

  const uri = process.env.MONGODB_URL;
  if (!uri) {
    throw new Error("MONGODB_URL 환경 변수가 설정되어 있지 않습니다 (.env.local 확인)");
  }

  if (process.env.NODE_ENV === "development") {
    // 개발 모드 HMR 시 커넥션이 계속 새로 생기는 것을 방지하기 위해 global에 캐싱
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = new MongoClient(uri).connect();
  }

  return clientPromise;
}
