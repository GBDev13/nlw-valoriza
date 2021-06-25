import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listReceiverSendComplimentsService =  new ListUserReceiverComplimentsService();

    const compliments = await listReceiverSendComplimentsService.execute(user_id)

    return response.json(compliments);
  }
}

export { ListReceiveComplimentsController }