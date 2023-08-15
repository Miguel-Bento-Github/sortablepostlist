import { get } from "@/lib/http";
import { ApiQueryKey } from "@/queries/apiQueryKey.enum";
import { PostsResponse } from "@/types/api/posts";
import { useQuery } from "@tanstack/vue-query";
import { Ref } from "vue";

/**
 * Fetches Post data. Omit the 'id' parameter to retrieve all Posts.
 * Consider using Promise.all with a limited number of ids to prevent over fetching data.
 * @param id - Optional Post id
 */
export const usePostsQuery = (id?: Ref<number>) =>
  useQuery({
    queryKey: [ApiQueryKey.Posts, id],
    queryFn: async () =>
      await get<PostsResponse[]>(
        `/posts/${id?.value ? `?_start=0&_limit=${id.value}` : ""}`
      )
  });
