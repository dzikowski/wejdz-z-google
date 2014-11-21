Wejdź z Google
==============

Proste rozszerzenie do przeglądarki Google Chrome, która pozwala na wchodzenie 
na dowolną stronę internetową bezpośrednio z wyszukiwarki Google.

Jak to działa w praktyce? Jeśli zainstalujesz rozszerzenie w swojej przeglądarce
internetowej, po prawej stronie pojawi się taki obrazek: 
<img src="https://raw.githubusercontent.com/dzikowski/wejdz-z-google/master/icon16.png" />.
Kiedy klikniesz na ten obrazek, automatycznie przejdziesz na stronę Google, 
a potem z powrotem na poprzednią stronę. Strona ta jednak, będzie "myślała", 
że wszedłeś na nią z Google (zresztą zgodnie z rzeczywistością).

Do czego możesz to wykorzystać? [Sprawdź!](https://chrome.google.com/webstore/detail/kdfmannbafpkabedemabbobjnpckmkka/publish-accepted).
-----------------------------------------------------

Poniżej jeszcze dodatkowe wyjaśnienia dla informatyków:

Czasami korzystne jest, kiedy nagłówek HTTP referrer przy wejściu na daną stronę
jest ustawiony na w miarę neutralny host. Żeby ustawić taki nagłówek, zazwyczaj
trzeba skorzystać z oprogramowania, które najpierw przekierowuje na zewnętrzny
serwer, który dopiero ustawia odpowiednie nagłówki. Takie podejście może nie być
do końca bezpieczne, ponieważ udostępniasz informacje o odwiedzanych stronach
zewnętrznym (i pewnie nieznanym) serwerom.

Ta wtyczka pozwala na osiągnięcie zbliżonego efektu bez konieczności 
udostępniania komuś innemu informacji o odwiedzanych stronach. Czysty 
JavaScript, wszystko działa w Twojej przeglądarce, bez odwoływania się do 
zewnętrznych serwerów. Ten kod został opublikowany właśnie dlatego, żeby Cię 
zapewnić o tym, że Twoje dane pozostaną prywatne.


