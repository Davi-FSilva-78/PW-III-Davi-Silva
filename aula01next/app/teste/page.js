import Image from "next/image";

export default function teste() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        
        <h1 className="text-2xl"> Cadastre-se </h1>

        <form >
          <label> Email </label>
          <input type="email"/>
          <br/>
          <label> Senha </label>
          <input type="password"/>
          <br/>
          <button 
            type="submit"
            className= "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          > 
            Cadastar
          </button>
        </form>
       
       
       
      </div>
    </main>
    
  );
}
