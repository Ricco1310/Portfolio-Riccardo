console.log("HI!");
    console.log($('#target-read-more-button'.text()));
    if ($('#target-read-more-button'.text() == "Lees meer" || '#target-read-more-button'.text() == "Lees minder")) {
        // all collapse functions
        // more projects collapse button
        $('#projectsCollapseButton').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $(this).attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $(this).text("Lees meer");
                scrollToID('#' + this, 200, 100);
            } else {
                $(this).text("View less");
            }
        });
        // target read more button
        $('#target-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#target-read-more-button' || '#target-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#target-read-more-button').text("Lees meer");
                $('#target-read-more-button-second').text("Lees meer");
            } else {
                $('#target-read-more-button').text("Lees minder");
                $('#target-read-more-button-second').text("Lees minder");
            }
        });
        // target red more button second
        $('#target-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#target-read-more-button' || '#target-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#target-read-more-button').text("Read more");
                $('#target-read-more-button-second').text("Read more");
            } else {
                $('#target-read-more-button').text("Read less");
                $('#target-read-more-button-second').text("Read less");
            }
            scrollToID('#target-read-more-button', 200, 100);
        });
        // secret motion read more button
        $('#secret-motion-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#secret-motion-read-more-button' || '#secret-motion-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#secret-motion-read-more-button').text("Read more");
                $('#secret-motion-read-more-button-second').text("Read more");
            } else {
                $('#secret-motion-read-more-button').text("Read less");
                $('#secret-motion-read-more-button-second').text("Read less");
            }
        });
        // secret motion red more button second
        $('#secret-motion-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#secret-motion-read-more-button' || '#secret-motion-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#secret-motion-read-more-button').text("Read more");
                $('#secret-motion-read-more-button-second').text("Read more");
            } else {
                $('#secret-motion-read-more-button').text("Read less");
                $('#secret-motion-read-more-button-second').text("Read less");
            }
            scrollToID('#secret-motion-read-more-button', 200, 100);
        });
        // hendrik read more button
        $('#hendrik-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#hendrik-read-more-button' || '#hendrik-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#hendrik-read-more-button').text("Read more");
                $('#hendrik-read-more-button-second').text("Read more");
            } else {
                $('#hendrik-read-more-button').text("Read less");
                $('#hendrik-read-more-button-second').text("Read less");
            }
        });
        // hendrik red more button second
        $('#hendrik-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#hendrik-read-more-button' || '#hendrik-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#hendrik-read-more-button').text("Read more");
                $('#hendrik-read-more-button-second').text("Read more");
            } else {
                $('#hendrik-read-more-button').text("Read less");
                $('#hendrik-read-more-button-second').text("Read less");
            }
            scrollToID('#hendrik-read-more-button', 200, 100);
        });
        // tomtom curfer read more button
        $('#tomtom-curfer-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#tomtom-curfer-read-more-button' || '#tomtom-curfer-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#tomtom-curfer-read-more-button').text("Read more");
                $('#tomtom-curfer-read-more-button-second').text("Read more");
            } else {
                $('#tomtom-curfer-read-more-button').text("Read less");
                $('#tomtom-curfer-read-more-button-second').text("Read less");
            }
        });
        // tomtom curfer red more button second
        $('#tomtom-curfer-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#tomtom-curfer-read-more-button' || '#tomtom-curfer-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#tomtom-curfer-read-more-button').text("Read more");
                $('#tomtom-curfer-read-more-button-second').text("Read more");
            } else {
                $('#tomtom-curfer-read-more-button').text("Read less");
                $('#tomtom-curfer-read-more-button-second').text("Read less");
            }
            scrollToID('#tomtom-curfer-read-more-button', 200, 100);
        });
    } else {
        // all collapse functions
        // more projects collapse button
        $('#projectsCollapseButton').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $(this).attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $(this).text("View more");
                scrollToID('#' + this, 200, 100);
            } else {
                $(this).text("View less");
            }
        });
        // target read more button
        $('#target-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#target-read-more-button' || '#target-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#target-read-more-button').text("Read more");
                $('#target-read-more-button-second').text("Read more");
            } else {
                $('#target-read-more-button').text("Read less");
                $('#target-read-more-button-second').text("Read less");
            }
        });
        // target red more button second
        $('#target-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#target-read-more-button' || '#target-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#target-read-more-button').text("Read more");
                $('#target-read-more-button-second').text("Read more");
            } else {
                $('#target-read-more-button').text("Read less");
                $('#target-read-more-button-second').text("Read less");
            }
            scrollToID('#target-read-more-button', 200, 100);
        });
        // secret motion read more button
        $('#secret-motion-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#secret-motion-read-more-button' || '#secret-motion-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#secret-motion-read-more-button').text("Read more");
                $('#secret-motion-read-more-button-second').text("Read more");
            } else {
                $('#secret-motion-read-more-button').text("Read less");
                $('#secret-motion-read-more-button-second').text("Read less");
            }
        });
        // secret motion red more button second
        $('#secret-motion-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#secret-motion-read-more-button' || '#secret-motion-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#secret-motion-read-more-button').text("Read more");
                $('#secret-motion-read-more-button-second').text("Read more");
            } else {
                $('#secret-motion-read-more-button').text("Read less");
                $('#secret-motion-read-more-button-second').text("Read less");
            }
            scrollToID('#secret-motion-read-more-button', 200, 100);
        });
        // hendrik read more button
        $('#hendrik-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#hendrik-read-more-button' || '#hendrik-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#hendrik-read-more-button').text("Read more");
                $('#hendrik-read-more-button-second').text("Read more");
            } else {
                $('#hendrik-read-more-button').text("Read less");
                $('#hendrik-read-more-button-second').text("Read less");
            }
        });
        // hendrik red more button second
        $('#hendrik-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#hendrik-read-more-button' || '#hendrik-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#hendrik-read-more-button').text("Read more");
                $('#hendrik-read-more-button-second').text("Read more");
            } else {
                $('#hendrik-read-more-button').text("Read less");
                $('#hendrik-read-more-button-second').text("Read less");
            }
            scrollToID('#hendrik-read-more-button', 200, 100);
        });
        // tomtom curfer read more button
        $('#tomtom-curfer-read-more-button').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#tomtom-curfer-read-more-button' || '#tomtom-curfer-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#tomtom-curfer-read-more-button').text("Read more");
                $('#tomtom-curfer-read-more-button-second').text("Read more");
            } else {
                $('#tomtom-curfer-read-more-button').text("Read less");
                $('#tomtom-curfer-read-more-button-second').text("Read less");
            }
        });
        // tomtom curfer red more button second
        $('#tomtom-curfer-read-more-button-second').on('click', function (event) {
            event.preventDefault();
            projectsCollapseButtonExpanded = $('#tomtom-curfer-read-more-button' || '#tomtom-curfer-read-more-button-second').attr("aria-expanded");
            if (projectsCollapseButtonExpanded == "true") {
                $('#tomtom-curfer-read-more-button').text("Read more");
                $('#tomtom-curfer-read-more-button-second').text("Read more");
            } else {
                $('#tomtom-curfer-read-more-button').text("Read less");
                $('#tomtom-curfer-read-more-button-second').text("Read less");
            }
            scrollToID('#tomtom-curfer-read-more-button', 200, 100);
        });
    }