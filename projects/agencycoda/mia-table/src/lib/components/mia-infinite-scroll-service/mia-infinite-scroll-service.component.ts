import { MiaBaseCrudHttpService, MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mia-infinite-scroll-service',
  templateUrl: './mia-infinite-scroll-service.component.html',
  styleUrls: ['./mia-infinite-scroll-service.component.scss']
})
export class MiaInfiniteScrollServiceComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() isFullScreen: boolean = true;
  @Input() service!: MiaBaseCrudHttpService<any>;
  @Input() query!: MiaQuery;

  isLoading = false;
  isFirstLoad = true;
  dataItems = new MiaPagination<any>();

  constructor(
    protected elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.loadMoreItems();
  }

  loadMoreItems() {
    // Verify if loading
    if(this.isLoading){
      return;
    }
    // Verify if the last page
    if(this.dataItems.last_page == this.dataItems.current_page && !this.isFirstLoad){
      return;
    }

    this.isLoading = true;
    this.isFirstLoad = false;
    this.service.listOb(this.query).subscribe(res => {
      this.dataItems.data.push(res.data);
      this.dataItems.current_page = res.current_page;
      this.dataItems.last_page = res.last_page;
      this.dataItems.total = res.total;
      this.isLoading = false;
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    console.log('onScroll');
    if(this.isFullScreen){
      const threshold = 50;
      const position = window.scrollY + window.innerHeight;
      const height = document.body.scrollHeight;
      const isBottom = position > height - threshold;
      console.log('Scroll - ' + isBottom);
      if(isBottom){
        this.loadMoreItems();
      }
    }

    //let params = this.elementRef.nativeElement.getBoundingClientRect();
  }
}
