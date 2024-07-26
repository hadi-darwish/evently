"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import client from "@/apolloClient";
import {
  CategoriesConnection,
  CreateCategoryInput,
  CreateCategoryPayload,
  QueryAllCategoriesArgs,
} from "@/schemas/generated/graphql";
import {
  CREATE_CATEGORY_MUTATION,
  GET_ALL_CATEGORIES_QUERY,
} from "../mutations/categories";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    const input: CreateCategoryInput = {
      category: {
        name: categoryName,
      },
    };
    const { data } = await client.mutate<{
      createCategory: CreateCategoryPayload;
    }>({
      mutation: CREATE_CATEGORY_MUTATION,
      variables: { input },
    });

    return data?.createCategory?.category;
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async (args: QueryAllCategoriesArgs) => {
  try {
    const { data } = await client.query<{
      allCategories: CategoriesConnection;
    }>({
      query: GET_ALL_CATEGORIES_QUERY,
      variables: args,
    });

    return data?.allCategories?.edges.map((edge) => edge.node);
  } catch (error) {
    handleError(error);
  }
};
