import { Observable } from 'rxjs';

const customObservable = new Observable((observer) => {
    observer.next('theValue');
    observer.error('smth went wrong');
    observer.complete()
})

customObservable.subscribe();

// customObservable.unsubscribe()
