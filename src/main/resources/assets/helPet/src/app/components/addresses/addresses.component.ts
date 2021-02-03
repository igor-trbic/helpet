import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressesService } from 'src/app/addresses.service';
import { Address } from 'src/app/models/address.model';
import { ModalComponent } from '../modal/modal.component';
import { ModalConfig } from '../modal/modal.config';

@Component({
  selector: 'addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  @ViewChild('modal') private modalComponent: ModalComponent

  constructor(private addressService: AddressesService) { }

  addresses: Address[];
  address = new Address();
  date: {year: number, month: number};
  modalConfig: ModalConfig = {
    modalTitle: 'Create new address'
  };

  createAddress() {
    this.address = new Address();
    return this.modalComponent.open().then((result) => {
      if (result === 'Save') {
        this.addressService.createAddress(this.address).subscribe(resp => {
          console.log(resp);
          this.getAllAddresses();
        })
      }
    }, (reason) => {
      console.log("Error happened: ", reason);
    });
  }

  updateAddress(address: Address) {
    this.address = address;
    return this.modalComponent.open().then((result) => {
      if (result === 'Save') {
        this.addressService.updateAddress(this.address).subscribe(resp => {
          console.log(resp);
          this.getAllAddresses();
        })
      }
    }, (reason) => {
      console.log("Error happened: ", reason);
    });
  }

  removeAddress(addressId: number) {
    this.addressService.removeAddress(addressId).subscribe(resp => {
      console.log(resp);
      this.getAllAddresses();
    })
  }

  getAllAddresses() {
    this.addressService.getAddresses().subscribe(resp => {
      this.addresses = resp;
    });
  }

  ngOnInit(): void {
    this.getAllAddresses();
  }

}
