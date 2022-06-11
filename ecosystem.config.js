module.exports = {
  apps: [{
    name: 'clinic-api',
    script: './clinic/bin/www',
    watch: true,
    log_date_format: "YYYY-MM-DD HH:mm Z",
    exec_mode: "cluster",
    max_restarts:"5",
    instances : "2"
  }],
};
