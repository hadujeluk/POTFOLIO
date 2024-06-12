/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Category } from "./Category";
import { CategoryCountArgs } from "./CategoryCountArgs";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryFindUniqueArgs } from "./CategoryFindUniqueArgs";
import { DeleteCategoryArgs } from "./DeleteCategoryArgs";
import { CategoryService } from "../category.service";
@graphql.Resolver(() => Category)
export class CategoryResolverBase {
  constructor(protected readonly service: CategoryService) {}

  async _categoriesMeta(
    @graphql.Args() args: CategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Category])
  async categories(
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.service.categories(args);
  }

  @graphql.Query(() => Category, { nullable: true })
  async category(
    @graphql.Args() args: CategoryFindUniqueArgs
  ): Promise<Category | null> {
    const result = await this.service.category(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Category)
  async deleteCategory(
    @graphql.Args() args: DeleteCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.deleteCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
