import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import getDateString from "./lib/a";
import getIpv4 from "./lib/b";

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;
  const ip = await getIpv4();
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world",
        date: getDateString(),
        ip: ip,
      }),
    };
  } catch (err) {
    console.log(err);
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "some error happened",
      }),
    };
  }

  return response;
};
