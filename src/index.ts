import { InMemoryRepository } from "./inMemoryRepository";
import { User } from "./user";
import { Product } from "./product";

//Gerenciador de item na memória
const inMemoryRepository = new InMemoryRepository<Product>;

//Usuários
const user01 = new User('12', 'Richard', 'richartdebrito@gmail.com');
const user02 = new User('17', 'Rafael', 'rafaelbrito244@gmail.com');

//Produtos
const prod01 = new Product('23', 'Coca-cola', 12.99);
const prod02 = new Product('67', 'Miojo', 2.70);
const prod03 = new Product('67', 'Miojo do Bom', 3.99);


inMemoryRepository.create(prod01);
inMemoryRepository.create(prod02);

console.log('Antes do update.')
console.log(inMemoryRepository.read('67'));


inMemoryRepository.update(prod03);

console.log('Depois do update.')
console.log(inMemoryRepository.read('67'));
