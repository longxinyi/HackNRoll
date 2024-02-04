import { Button } from "@mui/material";

export default function Index() {
  return (
    <div className="flex flex-col p-10 w-screen">
      <h3 className="text-center text-black">
        Note to developer: Click on these links to get started.
      </h3>
      <Button href="/admin/">Admin Portal</Button>
      <Button href="/volunteer/">Volunteer Portal</Button>
    </div>
  );
}
