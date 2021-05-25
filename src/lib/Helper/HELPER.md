# API's

- addClass ( className [ string]) : object
    ```js
    $('h1').addClass('big-heading')
    ```

- removeClass ( className [ string]) : object
    ```js
    $('h1').removeClass('big-heading') 
    ```

- toggleClass ( className [ string]) : object
    ```js
    $('h1').toggleClass('big-heading')
    ```

- hasClass ( className [ string]) : boolean
    ```js
    $('h1').hasClass('big-heading')
    ```

- attr ( name: string, value: [string | number | boolean | null ] = null ) : object
    ```js
    $('h1').attr('title') // get title
    $('h1').attr('title', 'Mega title') //set title
    ```

- closest ( selector: string ) : object
    ```js
    $('h1').closest('.card')
    ```

- prev (  ): object
    ```js
    $('h1').prev('h1')
    ```

- next (  ): object
    ```js
    $('h1').next('h1')
    ```

- remove ( ) : object
    ```js
    $('header').remove('.list') // remove from dom
    ```

- html ( html: string ) : object
    ```js
    $('h1').html('hello world') // need security improvement
    ```

- text ( text: string ): object
    ```js
    $('h1').text('hello world')
    ```

- val ( ): string | number | boolean
    ```js
    $('radio').val()
    ```

- on ( event: string, callback: callableFunction) : object
    ```js
    $('button').on('click', function () {
        alert('Hello world');
    })
    ```