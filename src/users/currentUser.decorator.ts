import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    console.log("CurrentUser", ctx.getContext().req[data])
    return ctx.getContext().req[data];
  },
);