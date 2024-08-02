import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  public users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>('/api/users')
      .subscribe(data => {
        this.users = data; // Atualiza a lista de usuários com os dados recebidos da API
      }, error => {
        console.error('Error loading users', error);
      });
  }

  addUser(name: string, email: string) {
    const newUser = { name, email };
    this.http.post('/api/users', newUser)
      .subscribe(response => {
        this.loadUsers(); // Recarrega a lista de usuários após adicionar um novo
      }, error => {
        console.error('Error adding user', error);
      });
  }
}
