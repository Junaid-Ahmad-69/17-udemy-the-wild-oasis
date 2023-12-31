import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../services/apiCabins.js";
import {toast} from "react-toastify";

export function useCreateCabin() {
    const queryClient = useQueryClient()
    const {mutate: createCabin, isLoading: isCreating} = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("New cabin created successfully");
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            });
        },
        onError: error => toast.error(error.message)
    });
    return {isCreating, createCabin}
}