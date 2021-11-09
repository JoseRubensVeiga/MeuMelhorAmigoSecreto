import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-names',
  templateUrl: './select-names.component.html',
  styleUrls: ['./select-names.component.scss'],
})
export class SelectNamesComponent implements OnInit {
  @ViewChild('input') inputRef?: ElementRef;
  names: string[] = [];

  secrets: string[] = [];

  inputValue: string = '';

  creating = true;

  constructor() {}

  ngOnInit(): void {}

  onAddClick(): void {
    if (!this.creating) {
      this.creating = true;
      return;
    }

    if (!this.inputValue) {
      return;
    }

    if (this.names.includes(this.inputValue)) {
      return;
    }

    this.names.push(this.inputValue);

    this.inputValue = '';
    this.inputRef?.nativeElement.focus();
  }

  onFinalizeClick(): void {
    if (this.names.length < 3) {
      alert('Adicione pelo menos 3 nomes');
      return;
    }

    this.creating = false;

    this.secrets = this.generateSecrets();
  }

  excluirNome(index: number): void {
    this.names.splice(index, 1);
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key !== 'Enter') {
      return;
    }

    this.onAddClick();
  }

  sendLink(index: number): void {
    const name = this.secrets[index];

    const hashed = btoa(name);
    const baseURL = window.location.href;
    const url = `${baseURL}/result?n=${hashed}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Texto copiado com sucesso!');
    });
  }

  private generateSecrets(): string[] {
    let nomesEmbaralhados: string[] = this.shuffleArray(this.names);

    while (
      nomesEmbaralhados.some(
        (nomeEmbaralhado, i) => this.names[i] === nomeEmbaralhado
      )
    ) {
      nomesEmbaralhados = this.shuffleArray(this.names);
    }

    return nomesEmbaralhados;
  }

  private shuffleArray(arr: any[]) {
    const newArr: any[] = [...arr];
    // Loop em todos os elementos
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }
}
