// Function to toggle the sidebar visibility
        document.getElementById('toggleButton').addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            const icon = document.getElementById('icon');
            sidebar.classList.toggle('open');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

        // Add event listeners to close sidebar when any li is clicked
        const sidebarLinks = document.querySelectorAll('#sidebar li');
        sidebarLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.remove('open');
                const icon = document.getElementById('icon');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
        
        
        function goToProfile() {
            window.location.href = 'profile.html';
        }
        
        function goToTask() {
            window.location.href = 'task.html';
        }

        function goToWithdraw() {
            window.location.href = 'withdraw.html';
        }
        
        function goToReferral() {
            window.location.href = 'referral.html';
        }

        function goToHistory() {
            window.location.href = 'history.html';
        }
        
        function goToReward() {
            window.location.href = 'reward.html';
        }
        
        
         // Toggle between login and signup forms
        document.getElementById('login-btn').addEventListener('click', function() {
            document.getElementById('login-form').classList.add('active');
            document.getElementById('signup-form').classList.remove('active');
            this.classList.add('active');
            document.getElementById('signup-btn').classList.remove('active');
        });

        document.getElementById('signup-btn').addEventListener('click', function() {
            document.getElementById('signup-form').classList.add('active');
            document.getElementById('login-form').classList.remove('active');
            this.classList.add('active');
            document.getElementById('login-btn').classList.remove('active');
        });