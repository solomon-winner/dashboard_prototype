import { useEffect } from "react";
import { isAuthenticatedState } from "../state/state";
import { login, register } from "../utils/api";
import handleError from "../utils/errorHandler";
import { useMutation } from "@tanstack/react-query"; // Changed to useMutation
import { useSetRecoilState } from "recoil";

export const useLogin = () => {
    const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

    const mutation = useMutation({
        mutationFn: login, // Correctly use mutationFn with useMutation
        onSuccess: (data) => {
            setIsAuthenticated(true);
        },
        onError: (error) => {
            console.error("Login failed:", error.message);
            handleError(error);
        },
        retry: 2,
    });

    return { 
        data: mutation.data, 
        isLoading: mutation.isPending, 
        isError: mutation.isError,
        mutate: mutation.mutate 
    };
}

export const useRegister = () => {
    const mutation = useMutation({
        mutationFn: register, // Correctly use mutationFn with useMutation
        onError: (error) => {
            console.error("Register failed:", error.message);
            handleError(error);
        },
        retry: 2,
    });

    return {
        data: mutation.data,
        isLoading: mutation.isPending,
        isError: mutation.isError,
        mutate: mutation.mutate
    };
}