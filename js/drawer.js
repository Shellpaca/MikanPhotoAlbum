
export const drawer = () => {
    $(document).ready(function() {
        $('.drawer').drawer();
        $('.drawer-nav').on('click', function() {
            $('.drawer').drawer('close');
        });
    });
};

