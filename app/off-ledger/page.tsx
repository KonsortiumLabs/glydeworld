import { redirect } from "next/navigation";

export default function OffLedgerPage() {
  redirect("/archive?category=off-ledger");
}
