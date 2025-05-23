import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>I am a button</Button>
        </div>
      </div>
      <div>
        <Input placeholder="I am an input"></Input>
      </div>
      <div>
        <Progress value={50}></Progress>
      </div>
      <div>
        <Textarea placeholder="I am a textarea"></Textarea>
      </div>
      <div>
        <Checkbox></Checkbox>
      </div>
    </div>
  );
}
