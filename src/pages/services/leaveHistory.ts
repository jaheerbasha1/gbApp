import { Leave } from "../../models/leaves";

export class LeaveHistoryService{
    private leaves: Leave[]=[];

    newLeave(type:string,startDate:Date,endDate:Date,duration:number){
this.leaves.push(new Leave(type,startDate,endDate,duration));
console.log(this.leaves);
    }

    getItems(){
        return this.leaves.slice();
    }
    removeItem(index:number){
        this.leaves.splice(index,1);
    }
}