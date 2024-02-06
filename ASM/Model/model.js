export class productService{
    static async fetchData(url){
        try {
            const response = await axios.get(url);
            return response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    static async addData(data){
        try {
            await axios.post('http://localhost:3000/products',data);
            console.log("them thanh cong")
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getLastId(){
        try {
            const response = await axios.get('http://localhost:3000/products');
            return response.data[response.data.length-1].id;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    static async deleteData(id){
        try {
            await axios.delete(`http://localhost:3000/products/${id}`)
            console.log("xoa thanh cong")
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getDataById(id){
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            return response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    static async updateData(id,data){
        try {
            await axios.put(`http://localhost:3000/products/${id}`,data);
            console.log("cap nhat thanh cong")
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}