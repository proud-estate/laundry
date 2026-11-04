// ===== ตั้งค่าการเชื่อมต่อ Firebase =====
// คัดลอกค่าจาก Firebase Console > Project settings > Your apps > Web app (SDK setup and configuration > Config)
// มาวางแทนข้อความในเครื่องหมายคำพูดด้านล่าง  (ดูขั้นตอนเต็มใน README.md)
//
// ถ้ายังไม่ได้ใส่ค่า เว็บจะทำงานใน "โหมดทดลอง" เก็บข้อมูลในเบราว์เซอร์เครื่องนั้นเท่านั้น และไม่มีหน้าล็อกอิน

window.FIREBASE_CONFIG = {
  apiKey: "ใส่ apiKey",
  authDomain: "ใส่ authDomain",
  projectId: "ใส่ projectId",
  storageBucket: "ใส่ storageBucket",
  messagingSenderId: "ใส่ messagingSenderId",
  appId: "ใส่ appId"
};
