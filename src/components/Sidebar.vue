<template>
    <div class="sidebar" :class="{ active: is_expanded }">
    <router-link class="button" to="/" style="text-decoration: none;">
        <div class="logo_content">
            <div class="logo">
                <i class='bx bx-code-block'></i>
                <div class="logo_name">CodingTime</div>
            </div>
            <i class="bx bx-menu" id="btn" @click="ToggleMenu"></i>
        </div>
    </router-link>
        <ul class="nav_list">
            <li>
                <a href="#">
                    <i class='bx bx-search-alt'></i>
                    <input type="text" placeholder="Search....">
                </a>

            </li>
            <li>

                <router-link class="button" to="/dashboard">
                    <i class='bx bx-grid-alt'></i>
                    <span class="links_name">Dashboard</span>

                </router-link>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>

                <router-link class="button" to="/user">
                    <i class='bx bx-user'></i>
                    <span class="links_name">User</span>
                </router-link>
                <span class="tooltip">User</span>
            </li>

            <li>
                 <router-link class="button" to="/message">
                    <i class='bx bx-chat'></i>
                    <span class="links_name">Message</span>
                </router-link>
                <span class="tooltip">Message</span>
            </li>
            <li>
                 <router-link class="button" to="/analytics">
                    <i class='bx bx-pie-chart-alt-2'></i>
                    <span class="links_name">Analytics</span>
                </router-link>
                <span class="tooltip">Analytics</span>
            </li>
            <li>
                 <router-link class="button" to="/file-manager">
                    <i class='bx bx-folder-open'></i>
                    <span class="links_name">File Manager</span>
                </router-link>
                <span class="tooltip">File Manager</span>
            </li>
            <li>
                 <router-link class="button" to="/order">
                    <i class='bx bx-cart'></i>
                    <span class="links_name">Order</span>
                </router-link>
                <span class="tooltip">Order</span>
            </li>
            <li>
                 <router-link class="button" to="/saved">
                    <i class='bx bx-heart'></i>
                    <span class="links_name">Saved</span>
                </router-link>
                <span class="tooltip">Saved</span>
            </li>
            <li>
                 <router-link class="button" to="/setting">
                    <i class='bx bx-cog'></i>
                    <span class="links_name">Setting</span>
                </router-link>
                <span class="tooltip">Setting</span>
            </li>
        </ul>
        <div class="profile_content">
            <div class="profile">
                <div class="profile_details">
                    <img src="../assets/logo.jpg" alt="">
                    <div class="name_job">
                        <div class="name">Prem Shahi</div>
                        <div class="job">Web Designer</div>
                    </div>
                </div>
                <i class="bx bx-log-out" id="log_out"></i>

            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(true);
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
}

</script>

<style>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 78px;
    background-color: #11101d;
    padding: 6px 14px;
    transition: all 0.5s ease;
}

.sidebar.active {
    width: 240px;
}

.sidebar .logo_content .logo {
    color: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;

}

.sidebar.active .logo_content .logo {
    opacity: 1;
    pointer-events: none;
}

.logo_content .logo i {
    font-size: 28px;
    margin-right: 5px;
}

.logo_content .logo .logo_name {
    font-size: 20px;
    font-weight: 400;
}

.sidebar #btn {
    position: absolute;
    color: #fff;
    top: 6px;
    left: 50%;
    font-size: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
}

.sidebar.active #btn {
    left: 90%;

}

.sidebar ul {
    margin-top: 20px;
}

.sidebar ul li {
    position: relative;
    height: 50px;
    width: 100%;
    margin: 0 5px;
    list-style: none;
    line-height: 50px;
    ;
}

.sidebar ul li .tooltip {
    position: absolute;
    height: 35px;
    width: 122px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    top: 0;
    left: 122px;
    line-height: 35px;
    text-align: center;
    transform: translate(-50%, 50%);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
}

.sidebar.active ul li:hover .tooltip {
    opacity: 0;
    display: block;
}

.sidebar ul li:hover .tooltip {
    transition: all 0.5s ease;
    top: 50%;
    opacity: 1;
    display: block;
}

.sidebar.active ul li:hover .tooltip {
    display: block;
}

.sidebar ul li a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    border-radius: 10px;
    white-space: nowrap;
}

.sidebar ul li a:hover {
    color: #11101d;
    background: #fff;
}

.sidebar ul li input {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    outline: none;
    border: none;
    padding-left: 50px;
    background: #1d1b31;
    font-size: 18px;
    color: #fff;
}

.sidebar ul li .bx-search-alt {
    z-index: 99;
    color: #fff;
    transition: all 0.4s ease;
    font-size: 22px;
}

.sidebar ul li .bx-search-alt:hover {
    background: #fff;
    color: #1d1b31;

}

.sidebar ul li i {
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
}

.sidebar.active .links_name {
    pointer-events: auto;
    opacity: 1;
}

.sidebar .links_name {
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;
}

.sidebar .profile_content {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
}

.sidebar .profile_content .profile {
    position: relative;
    padding: 10px 6px;
    height: 60px;
    transition: all 0.5s ease;
    background: #1d1b31;
}

.sidebar.active .profile_content .profile {
    background: none;
}

.profile_content .profile .profile_details {
    display: flex;
    align-items: center;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
}

.sidebar.active .profile_content .profile .profile_details {
    opacity: 1;
    pointer-events: auto;

}

.profile .profile_details img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 12px;
}

.profile .profile_details .name_job {
    margin-left: 10px;

}

.profile .profile_details .name {
    font-size: 15px;
    font-weight: 400;
}

.profile .profile_details .job {
    font-size: 12px;
}

.profile #log_out {
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
    min-width: 50px;
    line-height: 50px;
    font-size: 20px;
    border-radius: 12px;
    text-align: center;
    transition: all 0.5s ease;
}

.sidebar.active .profile #log_out {
    left: 88%;
    background: #1d1b31;
}

.container {
    width: calc(100% - 78px);
    left: 78px;
    transition: all 0.5s ease;
}

.sidebar.active~.container {
    width: calc(100% - 240px);
    left: 240px;
}
</style>