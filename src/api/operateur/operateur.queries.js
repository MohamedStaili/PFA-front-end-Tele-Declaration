import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getOperateurs, createOperateur } from "./operateur.api";
import { queryKeys } from "../queryKeys";

export const useOperateurs = () =>
    useQuery({
        queryKey: [queryKeys.operateurs],
        queryFn: getOperateurs,
    });

export const useCreateOperateur = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: createOperateur,
        onSuccess: () => qc.invalidateQueries([queryKeys.operateurs]),
    });
};
