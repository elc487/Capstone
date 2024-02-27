import { api } from "./api";
const TOKEN = "token";

const productApi = api.injectEndpoints({
    endpoints:builder => ({
        
        getAllProducts: builder.query ({
            query:() => '/products',
            providesTags: ["Products"]
        }),
        
        getProduct: builder.query ({
            query:(productId) => `/products/${productId}`,
        }),
        
        getProductCategories: builder.query ({
            query:() => '/products/categories'    
        }),
        
        getProductsbyCategory: builder.query ({
            query:(category) => `/products/${category}`,
        }),
        
        addNewProduct: builder.mutation ({
            query: (newproduct) => ({
                url: '/products',
                method: "POST",
                body: newproduct
            }),
            invalidatesTags: ["Products"]
        }),
        
        updateProduct: builder.mutation ({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ["Products"]
        }),
        
        deleteProduct: builder.mutation ({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"]
        }),
    })

});

export const{
    useGetAllProductsQuery,
    useGetProductQuery,
    useGetProductCategoriesQuery,
    useGetProductsbyCategoryQuery,
    useAddNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi
