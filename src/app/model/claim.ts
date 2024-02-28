export class Claim{
    claimId:number|undefined;
    policyId:number|undefined;
	
	productId:number|undefined;
	customerId:number|undefined;
	
	claimEntryDate:Date|undefined;
	causeOfLoss:string|undefined;
	claimAmount:number|undefined;
  status:string="Pending";
}