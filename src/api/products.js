import { api } from "./api";
const TOKEN = "token";

const productApi = api.injectEndpoints({
    endpoints:builder => ({
        
        getAllProducts: builder.query ({
            query:() => 'api/products',
            providesTags: ["Products"]
        }),
        
        getProduct: builder.query ({
            query:(productId) => `api/products${productId}`,
        }),
        
        getProductCategories: builder.query ({
            query:() => 'api/products/categories'    
        }),
        
        getProductsbyCategory: builder.query ({
            query:(category) => `api/products/${category}`,
        }),
        
        addNewProduct: builder.mutation ({
            query: (newproduct) => ({
                url: 'api/products',
                method: "POST",
                body: newproduct
            }),
            invalidatesTags: ["Products"]
        }),
        
        updateProduct: builder.mutation ({
            query: (product) => ({
                url: `api/products/${product.id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ["Products"]
        }),
        
        deleteProduct: builder.mutation ({
            query: (productId) => ({
                url: `api/products/${productId}`,
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
