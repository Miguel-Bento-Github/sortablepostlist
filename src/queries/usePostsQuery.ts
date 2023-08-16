import { get } from "@/lib/http";
import { ApiQueryKey } from "@/queries/apiQueryKey.enum";
import { PostsResponse } from "@/types/api/posts";
import { useQuery } from "@tanstack/vue-query";

/**
 * Fetches Post data. Omit the 'id' parameter to retrieve all Posts.
 * @param start - Post index start
 * @param end - Post index end
 */
export const usePostsQuery = (start = 0, end?: number) =>
  useQuery({
    queryKey: [ApiQueryKey.Posts, start, end],
    queryFn: async () =>
      await get<PostsResponse[]>(
        `/posts/${end ? `?_start=${start}&_limit=${end}` : ""}`
      )
  });
