<style scoped>
input[type=checkbox] {
  top: 5px;
}
input[type=radio] {
  top: -2px;
}
</style>

<template>
  <layout :notifications="notifications">
    <div class="ph2 ph0-ns">
      <breadcrumb :with-box="true"
                  :root-url="'/' + $page.props.auth.company.id + '/dashboard'"
                  :root="$t('app.breadcrumb_dashboard')"
                  :previous-url="'/' + $page.props.auth.company.id + '/account/hardware'"
                  :previous="$t('app.breadcrumb_account_manage_hardware')"
      >
        {{ $t('app.breadcrumb_account_edit_hardware') }}
      </breadcrumb>

      <!-- BODY -->
      <div class="mw7 center br3 mb5 bg-white box restricted relative z-1">
        <div class="pa3 mt5 measure center">
          <h2 class="tc normal mb4">
            {{ $t('account.hardware_edit_title') }}

            <help :url="$page.props.help_links.hardware" :datacy="'help-icon-hardware'" />
          </h2>

          <form @submit.prevent="submit">
            <errors :errors="form.errors" />

            <div class="cf pa3 bb-gray pb1">
              <!-- Name -->
              <text-input :id="'name'"
                          v-model="form.name"
                          :name="'name'"
                          :datacy="'hardware-name-input'"
                          :errors="$page.props.errors.title"
                          :label="$t('account.hardware_create_name_input')"
                          :required="true"
                          :autofocus="true"
              />

              <!-- Serial number -->
              <text-input :id="'serial'"
                          v-model="form.serial"
                          :name="'serial'"
                          :datacy="'hardware-serial-input'"
                          :errors="$page.props.errors.title"
                          :label="$t('account.hardware_create_serial_input')"
                          :help="$t('account.hardware_create_serial_input_help')"
                          :required="false"
              />
            </div>

            <div class="cf pa3 bb-gray">
              <!--  -->
              <checkbox
                :id="'home'"
                v-model="form.lend_hardware"
                :datacy="'lend-hardware-checkbox'"
                :label="$t('account.hardware_create_lend_hardware')"
                :extra-class-upper-div="'mb0 relative'"
                :required="false"
              />

              <select-box v-if="form.lend_hardware"
                          :id="'employee_id'"
                          v-model="form.employee_id"
                          :options="employees"
                          :name="'employee_id'"
                          :errors="$page.props.errors.employee_id"
                          :placeholder="$t('account.hardware_create_lend_name')"
                          :required="false"
                          :datacy="'employee-selector'"
              />
            </div>

            <!-- Actions -->
            <div class="mv4">
              <div class="flex-ns justify-between">
                <div>
                  <inertia-link :href="'/' + $page.props.auth.company.id + '/account/hardware/' + hardware.id" class="btn dib tc w-auto-ns w-100 mb2 pv2 ph3">
                    {{ $t('app.cancel') }}
                  </inertia-link>
                </div>
                <loading-button :class="'btn add w-auto-ns w-100 mb2 pv2 ph3'" :state="loadingState" :text="$t('app.save')" :cypress-selector="'submit-edit-hardware-button'" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import TextInput from '@/Shared/TextInput';
import Checkbox from '@/Shared/Checkbox';
import Errors from '@/Shared/Errors';
import LoadingButton from '@/Shared/LoadingButton';
import Layout from '@/Shared/Layout';
import Breadcrumb from '@/Shared/Layout/Breadcrumb';
import SelectBox from '@/Shared/Select';
import Help from '@/Shared/Help';

export default {
  components: {
    Checkbox,
    Layout,
    Breadcrumb,
    TextInput,
    Errors,
    LoadingButton,
    SelectBox,
    Help
  },

  props: {
    employees: {
      type: Array,
      default: null,
    },
    hardware: {
      type: Object,
      default: null,
    },
    notifications: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      form: {
        name: null,
        serial: null,
        employee_id: null,
        lend_hardware: false,
        errors: [],
      },
      loadingState: '',
      errorTemplate: Error,
    };
  },

  created() {
    this.form.name = this.hardware.name;
    this.form.serial = this.hardware.serial_number;
    if (this.hardware.employee) {
      this.form.lend_hardware = true;
      this.form.employee_id = this.hardware.employee.value;
    }
  },

  methods: {
    submit() {
      this.loadingState = 'loading';
      if (!this.form.lend_hardware) {
        this.form.employee_id = null;
      }

      axios.put('/' + this.$page.props.auth.company.id + '/account/hardware/' + this.hardware.id, this.form)
        .then(response => {
          localStorage.success = this.$t('account.hardware_update_success');
          this.$inertia.visit('/' + this.$page.props.auth.company.id + '/account/hardware/' + this.hardware.id);
        })
        .catch(error => {
          this.loadingState = null;
          this.form.errors = error.response.data;
        });
    },
  }
};

</script>
